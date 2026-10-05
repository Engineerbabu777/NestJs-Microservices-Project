

import { uuid, varchar, timestamp, integer, pgTable } from "drizzle-orm/pg-core";


export const tickets = pgTable('tickets',{
    id: uuid().defaultRandom().primaryKey(),
    orderId: uuid('order_id').notNull(),
    customerName: varchar('customer_name', {length:100}).notNull(),
    item: varchar('item', {length:100}).notNull(),
    quantity: integer('quantity').notNull(),
    status: varchar('status', {length:50}).default('received').notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
})

export type Ticket = typeof tickets.$inferSelect;
export type NewTicket = typeof tickets.$inferInsert;