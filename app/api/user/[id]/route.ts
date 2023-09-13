import { NextResponse } from "next/server";
import { usersRepo } from "@/app/helpers/userRepo";

export async function GET(request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
    const user = usersRepo.getById(id);
  
    if (!user) {
      let error_response = {
        status: "fail",
        message: "No user with the Provided ID Found",
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    let json_response = {
      status: "success",
      data: {
        user,
      },
    };
    return NextResponse.json(json_response);
  }
  
