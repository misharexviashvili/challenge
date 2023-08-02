import { Employee } from "./types"

export const EMPTY_EMPLOYEE: Employee = {
  id: Date.now().toString(),
  firstName: "All",
  lastName: "Employees",
}
