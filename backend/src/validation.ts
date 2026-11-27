import zod from "zod";


export const auth_validation=zod.object({
    email:zod.string(),
    password:zod.string().min(8).max(8)
})

export const middleware_auth=zod.object({
    token:zod.string()
})

export const put_folder_validation=zod.object({
    name:zod.string(),
    existing_name:zod.string()
})