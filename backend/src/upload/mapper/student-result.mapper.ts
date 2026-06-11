import { RawStudentRow } from '../interfaces/raw-student-row.interface';

export class StudentResultMapper {
    // This function will map a raw student row to a StudentResult object.
    static map(row: RawStudentRow) {
        return {
            seatNumber: row.Seat_no,
            universityNumber: row.U_No,
            fullName: row.Name,
            nationalId: row.الرقم_القومى,
            department: row.القسم_العلمى,
            level: row.المستوى,

            // This function will extract subjects from the row.
            subjects: this.extractSubjects(row),

            // This function will extract summary from the row.
            summary: this.extractSummary(row),
        };
    }

    // This function will extract subjects from the row.
    // It iterates through the keys of the row and checks if the key ends with '_Mark'.
    // If it does, it adds the subject to the subjects array.
    private static extractSubjects(
        row: RawStudentRow,
    ) {
        const subjects: {}[] = [];

        const subjectNames = new Set<string>();

        Object.keys(row).forEach((key) => {
            if (key.endsWith('_Mark')) {
                subjectNames.add(
                    key.replace('_Mark', ''),
                );
            }
        });

        for (const subjectName of subjectNames) {
            subjects.push({
                name: subjectName,

                mark: Number(
                    row[`${subjectName}_Mark`] || 0,
                ),

                points: Number(
                    row[`${subjectName}_Points`] || 0,
                ),

                grade:
                    row[`${subjectName}_Grade`] ||
                    row[`${subjectName}_Grad`] ||
                    '',

                creditHours: Number(
                    row[
                    `${subjectName}_CreditHours`
                    ] ||
                    row[
                    `${subjectName}_Credit_Hrs`
                    ] ||
                    0,
                ),
            });
        }

        return subjects;
    }

    // This function will extract summary from the row.
    // It checks for GPA, OverallGrade, PointsSum, AssignedHours, and PassedHours.
    private static extractSummary(
        row: RawStudentRow,
    ) {
        return {
            gpa: Number(
                row.GPA ||
                row['2ndGPA'] ||
                row['1stGPA'] ||
                0,
            ),

            overallGrade:
                row.OverallGrade ||
                row.التقدير ||
                '',

            pointsSum: Number(
                row.PointsSum ||
                row['مجموع النقاط'] ||
                0,
            ),

            assignedHours: Number(
                row.AssignedHours ||
                row['2nd_Assigned_Hrs'] ||
                row['1st_term_assigned_hrs'] ||
                0,
            ),

            passedHours: Number(
                row.PassedHours ||
                row['2ndPassed_hr'] ||
                row['1st_term_Passed_hr'] ||
                0,
            ),
        };
    }
}