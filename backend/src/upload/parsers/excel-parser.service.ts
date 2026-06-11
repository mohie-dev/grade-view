import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Cell, Row, Workbook } from 'exceljs';

@Injectable()
export class ExcelParserService {

  // This function will parse the excel file.
  public async parse(file: Express.Multer.File) {
    try {
      const workbook = new Workbook();
      await workbook.xlsx.load(file.buffer as any);

      const worksheet = workbook.getWorksheet(1);
      if (!worksheet) throw new Error('No worksheet found');

      const rows: Record<string, string>[] = [];

      // Assuming headers are in the first row
      const headers = this.getRowValues(worksheet.getRow(1));

      worksheet.eachRow((row, rowNumber) => {
        // Skip header row
        if (rowNumber > 1) {
          const rowData = this.processRow(row, headers);
          rows.push(rowData);
        }
      });

      return rows;
    } catch (error) {
      console.error('Error parsing Excel:', error);
      throw new InternalServerErrorException('Failed to parse Excel file');
    }
  }

  // This function will get the values of a row.
  private getRowValues(row: Row) {   
    if (!row) return [];
    const values: string[] = [];
    row.eachCell({ includeEmpty: true }, (cell) => {
      values.push(cell.text);
    });
    return values;
  }

  // This function will process the row and return a Record<string, string>.
  // It takes a Row object and an array of headers as input.
  private processRow(row: Row, headers: string[]) {
    if (!row) return {};
    const rowData: Record<string, string> = {};
    const values = this.getRowValues(row);
    headers.forEach((header, index) => {
      rowData[header] = values[index];
    });
    return rowData;
  }
}