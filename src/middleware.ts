import { NextRequest, NextResponse } from 'next/server';
import Cookies from 'js-cookie';


export default async function middleware(req: NextRequest) {
  const nameFromCookie = req.nextUrl.searchParams.get('name');
  const{ pathname } = req.nextUrl;

  try{
    const hasName = req.cookies.get('name');
      console.log(hasName);
      if(pathname.startsWith('/quiz')){
        if(hasName){
          console.log(hasName);
          return NextResponse.next();
        }
        else{
          return NextResponse.redirect(new URL("/", req.url));
        }
      }
    
  }catch(err){
    console.log(err)
  }
  
}