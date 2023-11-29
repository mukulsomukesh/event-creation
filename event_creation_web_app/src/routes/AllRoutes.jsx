import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateEventPage from './CreateEventPage'
import ListingPage from './ListingPage'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CreateEventPage />} />
            <Route path="/event_list" element={<ListingPage />} />
            <Route path="*" element={ <h1> page not found </h1> } />
        </Routes>
    )
}
