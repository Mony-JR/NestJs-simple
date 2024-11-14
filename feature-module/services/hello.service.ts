import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

   public message( hello?:string ):Promise<string> {
    if(!hello){
        return Promise.resolve("Hello")
    }
    return Promise.resolve (hello) ;
    }
}
