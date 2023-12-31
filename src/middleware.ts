import { NextRequest, NextResponse } from 'next/server';



export default async function middleware(req: NextRequest) {
  const{ pathname } = req.nextUrl;

  try{
    const hasName = req.cookies.get('name');
      if(pathname.startsWith('/quiz')){
        if(hasName){
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