import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { jobId, userId } = req.body;
        try {
            const bookmark = await prisma.bookmarked.create({
                data: {
                    jobId: jobId,
                    userId: userId,
                },
            });
            res.status(200).json(bookmark);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create bookmark' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
