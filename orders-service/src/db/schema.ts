

import { uuid, varchar, timestamp, integer, pgTable } from "drizzle-orm/pg-core";


export const orders = pgTable('orders',{
    id: uuid().defaultRandom().primaryKey(),
    customerName: varchar('customer_name', { length: 255 }).notNull(),
    item: varchar('item', { length: 255 }).notNull(),
    quantity: integer('quantity').notNull(),
    status: varchar('status', {length:50}).default('pending').notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
})

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;