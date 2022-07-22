import { Feedback } from "src/entity/feedback.entity"
import { createConnection } from "typeorm"

export const databaseProvider = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: async () =>
            await createConnection({
                type: 'postgres',
                host: "tai.db.elephantsql.com",
                port: 5432,
                username: "limnrazj",
                database: "limnrazj",
                password: "FQrhrYq0IZSiE_c9Q-NbYQu3U-AS2bev",
                entities: [Feedback],
                synchronize: true,
            })
    }
]