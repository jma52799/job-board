import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const { id } = req.body;
        try {
            const bookmark = await prisma.bookmarked.delete({
                where: {
                    id,
                },
            });
            res.status(200).json(bookmark);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete bookmark' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
