import { EntityManager } from "typeorm"
import { Request, Response } from "express"
import { Session } from "express-session"


export type MyContext = {
    manager: EntityManager,
    req: Request & { session: Session & {userId: number} },
    res: Response
}