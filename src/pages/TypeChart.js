import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Service Plumbing',
        Revenue: 162000
	},
	{
		name: 'Bid Work HVAC',
        Revenue: 129000
	},
	{
		name: 'Service HVAC',
        Revenue: 79300
	},
	{
		name: 'Bid Work Plumbing',
        Revenue: 76200
	},
	{
		name: 'HWT Replacement',
        Revenue: 46000

	},
	{
		name: 'Maintenance',
        Revenue: 44000

	},
	{
		name: 'Material Sale',
        Revenue: 3000
	}
]

export default function LocationChart() {
	return (
		<div className="h-[22rem] mb-1 bg-white p-4 rounded-sm border border-gray-600 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Revenue By Job Type for November 2019</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 1 1" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Revenue" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}