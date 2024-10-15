import Link from 'next/link';

import AdminDashboardCount from '../shared/AdminDashboardCount';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function PillaFinance() {
  return (
    <div>
      {/* cards section  */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <AdminDashboardCount
          countHead="Total Finance"
          countNumber="₦ 10,000,000.00"
          className="bg-white text-black"
        />
        <AdminDashboardCount
          countHead="Outstanding Balance"
          countNumber="₦ 10,000,000.00"
          className="bg-white text-black"
        />
        <AdminDashboardCount
          countHead="Total Credit Check"
          countNumber="1,200"
          className="bg-white text-black"
        />
      </div>

      {/* cards section  */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <AdminDashboardCount
          countHead="Total Application"
          countNumber="1,200"
          className="bg-white text-black"
        />
        <AdminDashboardCount
          countHead="Approved Application"
          countNumber="1,200"
          className="bg-white text-black"
        />
        <AdminDashboardCount
          countHead="Declined Application"
          countNumber="1,200"
          className="bg-white text-black"
        />
      </div>

      {/* table section */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between ">
            <CardTitle className="text-lg font-medium">Credit Check Application</CardTitle>
            <Link
              href="/admin/dashboard/pilla-finance/credit-application"
              className="text-lg hover:underline"
            >
              See all
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-[#E5EBFF]">
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: 'ID-U5219j40W', name: 'Jordan Stevenson', status: 'Pending' },
                  { id: 'ID-U5219j40W', name: 'Jordan Stevenson', status: 'Pending' },
                  { id: 'ID-U5219j40W', name: 'Jordan Stevenson', status: 'Pending' },
                  { id: 'ID-U5219j40W', name: 'Jordan Stevenson', status: 'Approved' },
                  { id: 'ID-U5219j40W', name: 'Jordan Stevenson', status: 'Approved' },
                ].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <span
                        className={`text-md rounded-full px-2 py-1 ${
                          item.status === 'Pending'
                            ? 'bg-red-100 text-red-500'
                            : 'bg-green-100 text-green-500'
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* second table */}
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">Loan Application</CardTitle>
            <Link
              href="/admin/dashboard/pilla-finance/loan-application"
              className="text-lg hover:underline"
            >
              See all
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-[#E5EBFF]">
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: 'ID-AFW420WCC', amount: '₦1,500,000.00', status: 'Pending' },
                  { id: 'ID-AFW420WCC', amount: '₦1,500,000.00', status: 'Pending' },
                  { id: 'ID-AFW420WCC', amount: '₦1,500,000.00', status: 'Pending' },
                  { id: 'ID-AFW420WCC', amount: '₦1,500,000.00', status: 'Pending' },
                  { id: 'ID-AFW420WCC', amount: '₦1,500,000.00', status: 'Pending' },
                ].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`text-md rounded-full px-2 py-1 ${
                          item.status === 'Pending'
                            ? 'bg-red-100 text-red-500'
                            : 'bg-green-100 text-green-500'
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
