import { Controller, Get, RequestMapping } from "@nestjs/common";
import { HelloService } from "../services/hello.service";

@Controller()
export class helloController{

    private hello =new HelloService();
    
    @Get("/hello")
    helloWorld(): string {
        return "Hello World! Me ";
    }

    @Get("/message")
    getMessage():Promise<string> {

        return this.hello.message();

    }

}