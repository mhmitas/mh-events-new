import * as z from "zod"

export const eventFormSchema = z.object({
    title: z.string()
        .min(3, { message: "Title must be at list 3 characters" })
        .max(50, { message: "Title must be maximum 50 characters" }),
    description: z.string()
        .min(5, { message: "Description must be at list 5 characters" })
        .max(400, { message: "Description must be less than 400 characters" }),
    location: z.string()
        .min(3, { message: "Location must be at list 3 characters" })
        .max(400, { message: "Location must be less than 400 characters" }),
    imageUrl: z.string().url(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string()
})