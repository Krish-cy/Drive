import zod from "zod";


export const auth_validation=zod.object({
    email:zod.string(),
    password:zod.string().min(8).max(8)
})

export const middleware_auth=zod.object({
    token:zod.string()
})
