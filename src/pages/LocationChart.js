import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Everett',
        Revenue: 101000
	},
	{
		name: 'Seattle',
        Revenue: 91000
	},
	{
		name: 'Lynnwood',
        Revenue: 49300
	},
	{
		name: 'Bothell',
        Revenue: 47200
	},
	{
		name: 'Mukliteo',
        Revenue: 46000

	},
	{
		name: 'Edmonds',
        Revenue: 34000
	}
]

export default function LocationChart() {
	return (
		<div className="h-[22rem] mb-1 bg-white p-4 rounded-sm border border-gray-600 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Revenue By Job Location for November 2019</strong>
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
						<CartesianGrid strokeDasharray="3 2 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Revenue" fill="#0ea5e9" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}