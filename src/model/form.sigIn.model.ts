import { z } from "zod";

export const schema = z.object({
    email: z.string().email("Invalid email, please enter a valid one").min(1, "Add more characters").max(40, "Too many characters, remove some"),
    password: z.string().min(1, "Add more characters"),
    revpassword: z.string().min(1, "Add more characters")
}).refine((c) => c.password === c.revpassword, {
    message:"Passwords do not match",
    path:["revpassword"]
});

export type formValuesignin = z.infer<typeof schema>;
