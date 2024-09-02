"use client";
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

export default function Component() {
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
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted/50"
            onClick={handlePrintBrowse}
          >
            <PrinterIcon className="h-5 w-5" />
            <span className="sr-only">Print</span>
          </Button>
        </div>
        <div className="relative flex-1 md:max-w-xs">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search students..."
            className="w-full rounded-lg bg-background pl-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <FilterIcon className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Inactive</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Graduated</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            variant="outline"
            className="h-8 gap-1"
            onClick={() => handlePrint()}
          >
            <DownloadIcon className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
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
                <TableRow>
                  <TableCell>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">
                      johndoe@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">18</TableCell>
                  <TableCell className="hidden sm:table-cell">12th</TableCell>
                  <TableCell className="hidden md:table-cell">3.8</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="secondary">Active</Badge>
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
                          <span className="sr-only">Toggle menu</span>
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
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-sm text-muted-foreground">
                      janesmith@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">16</TableCell>
                  <TableCell className="hidden sm:table-cell">10th</TableCell>
                  <TableCell className="hidden md:table-cell">3.5</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="secondary">Active</Badge>
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
                          <span className="sr-only">Toggle menu</span>
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
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-sm text-muted-foreground">
                      michaeljohnson@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">17</TableCell>
                  <TableCell className="hidden sm:table-cell">11th</TableCell>
                  <TableCell className="hidden md:table-cell">3.2</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="outline">Inactive</Badge>
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
                          <span className="sr-only">Toggle menu</span>
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
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Emily Davis</div>
                    <div className="text-sm text-muted-foreground">
                      emilydavis@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">15</TableCell>
                  <TableCell className="hidden sm:table-cell">9th</TableCell>
                  <TableCell className="hidden md:table-cell">3.7</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="secondary">Active</Badge>
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
                          <span className="sr-only">Toggle menu</span>
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
                <TableRow>
                  <TableCell>
                    <div className="font-medium">David Lee</div>
                    <div className="text-sm text-muted-foreground">
                      davidlee@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">19</TableCell>
                  <TableCell className="hidden sm:table-cell">12th</TableCell>
                  <TableCell className="hidden md:table-cell">4.0</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="secondary">Active</Badge>
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
                          <span className="sr-only">Toggle menu</span>
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
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Sarah Kim</div>
                    <div className="text-sm text-muted-foreground">
                      sarahkim@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">17</TableCell>
                  <TableCell className="hidden sm:table-cell">11th</TableCell>
                  <TableCell className="hidden md:table-cell">3.9</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="secondary">Active</Badge>
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
                          <span className="sr-only">Toggle menu</span>
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
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong> students
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
