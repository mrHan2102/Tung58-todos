import { z } from "zod";

export const ITodo = z.object({
    id: z.number(),
    content: z.string(),
    isCompleted: z.boolean()
})

export type Todo = z.infer<typeof ITodo>
