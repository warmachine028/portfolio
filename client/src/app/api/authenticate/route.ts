import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
	const body = await request.json()
	const { password } = body
	const correctPassword = 'password'
	const cookieStore = await cookies()
	if (password === correctPassword) {
		const response = NextResponse.json({ success: true })

		cookieStore.set('authToken', 'authenticated', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60,
			sameSite: 'strict',
			path: '/'
		})

		return response
	}
	return NextResponse.json({ message: 'Incorrect password' }, { status: 401 })
}

export async function GET() {
	return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 })
}
