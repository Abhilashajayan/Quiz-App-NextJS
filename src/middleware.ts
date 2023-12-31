import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const{ pathname } = req.nextUrl;
  try{
    console.log(pathname);
  }catch(err){
    console.log(err)
  }
  
}