import { usersRepo } from "@/app/helpers/userRepo";

export async function POST(request: Request) 
{
    console.log(request);
    const data = await request.json();
    const user = usersRepo.login(data);

    if(!user) { throw Error; }

    console.log("succes");
    return user;
}