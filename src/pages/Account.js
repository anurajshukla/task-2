import React from 'react'
import LocationChart from './LocationChart'
import TypeChart from './TypeChart'

export default function DashboardStatsGrid() {
	return (
		<section className='h-screen bg-white '>
            <div className='mx-12 my-5 text-2xl font-bold'>
                Company Metrics
            </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-5 mb-12 mx-12">
			<BoxWrapper>
				<div className="rounded-full h-full w-3 flex items-center justify-center bg-green-500">
				</div>
				<div className="pl-4">
					<span className="text-sm text-black font-semibold">Total Revenue</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$406,411.29</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-full w-3 flex items-center justify-center bg-orange-600">
				</div>
				<div className="pl-4">
					<span className="text-sm text-black font-semibold">Total Jobs Avg</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$620</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-full w-3 flex items-center justify-center bg-yellow-400">
				</div>
				<div className="pl-4">
					<span className="text-sm text-black font-semibold">Tickets Created</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">665</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-full w-3 flex items-center justify-center bg-sky-600">
					
				</div>
				<div className="pl-4">
					<span className="text-sm text-black font-semibold">Tickets Scheduled</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">735</strong>
					</div>
				</div>
			</BoxWrapper>
            <BoxWrapper>
				<div className="rounded-full h-full w-3 flex items-center justify-center bg-red-800">
					
				</div>
				<div className="pl-4">
					<span className="text-sm text-black font-black">Outstanding Amout</span>
					<div className="flex items-center">
						<strong className="text-xl text-red-700 font-semibold">$110,448.8</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-full w-3 flex items-center justify-center bg-yellow-200">
					
				</div>
				<div className="pl-4">
					<span className="text-sm text-black font-semibold">Memberships Sold</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">105</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-full w-3 flex items-center justify-center bg-orange-400">
					
				</div>
				<div className="pl-4">
					<span className="text-sm text-black font-semibold">Jobs Completed</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">436</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-full w-3 flex items-center justify-center bg-green-600">
					
				</div>
				<div className="pl-4">
					<span className="text-sm text-black font-semibold">Total Cancelled</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">65</strong>
					</div>
				</div>
			</BoxWrapper>
		</div>
        <div className='flex sm:flex-row flex-col mx-12 gap-4'>
            <LocationChart />
            <TypeChart />
        </div>
        </section>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-gray-200 rounded-sm p-5 flex-1 shadow-md shadow hover:shadow-lg border border-gray-600 flex items-center">{children}</div>
}