

import { uuid, varchar, timestamp, integer, pgTable } from "drizzle-orm/pg-core";


export const dispataches = pgTable('dispataches',{
    id: uuid().defaultRandom().primaryKey(),
    orderId: varchar('order_id', { length: 255 }).notNull(),
    customerName: varchar('customer_name', { length: 255 }).notNull(),
    item: varchar('item', { length: 255 }).notNull(),
    riderStatus: varchar('rider_status', {length:50}).default('dispatched').notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
})

export type Dispatch = typeof dispataches.$inferSelect;
export type NewDispatch = typeof dispataches.$inferInsert;