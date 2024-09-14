"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DownloadIcon,
  FilterIcon,
  MoveHorizontalIcon,
  PrinterIcon,
} from "lucide-react";

import { handlePrint } from "@/lib/handlePrint";

import { Students, IStudent } from "@/lib/studentsData";
import { CSVLink } from "react-csv";

export default function Component() {
  const [students, setStudents] = useState<IStudent[]>([]);

  useEffect(() => {
    setStudents(Students);
  }, []);

  function handlePrintBrowse() {
    window.print();
  }

  return (
    <div className="pt-14 flex flex-col w-full min-h-screen bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold sm:text-2xl">
            Student Management
          </h1>
          <Button variant="ghost" size="icon" onClick={handlePrintBrowse}>
            <PrinterIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="relative flex-1 md:max-w-xs">
          <Input
            type="search"
            placeholder="Search students..."
            className="w-full rounded-lg bg-background pl-8"
          />
        </div>
        <div className="flex items-center gap-2">
          {/* Botões de filtro e exportação */}
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Student Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden sm:table-cell">Age</TableHead>
                  <TableHead className="hidden sm:table-cell">Grade</TableHead>
                  <TableHead className="hidden md:table-cell">GPA</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {student.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {student.age}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {student.grade}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {student.gpa}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge
                        variant={
                          student.status === "Active" ? "secondary" : "outline"
                        }
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoveHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-{students.length}</strong> of{" "}
              <strong>{students.length}</strong> students
            </div>
            <div>
              <Button>
                <CSVLink data={students}>Export</CSVLink>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
