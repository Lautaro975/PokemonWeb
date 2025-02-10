import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, "It's required").max(15, "Too many characters, remove some"),
    lastname: z.string().min(1, "It's required").max(15, "Too many characters, remove some"),
    email: z.string().email("Invalid email, please enter a valid one").min(1, "Add more characters").max(40, "Too many characters, remove some"),
    password: z.string().min(1, "It's required"),
    revpassword: z.string().min(1, "It's required")
}).refine((c) => c.password === c.revpassword, {
    message:"Passwords do not match",
    path:["revpassword"]
});

export type formValuesignup = z.infer<typeof schema>;
