import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
	const cookieStore = cookies()
	const authToken = cookieStore.get('authToken')

	if (authToken?.value === 'authenticated') {
		return NextResponse.json({ authenticated: true })
    }
	return NextResponse.json({ authenticated: false }, { status: 401 })
}
