import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const noteId = req.query.id

    if(req.method === 'DELETE') {
        const note = await prisma.note.delete({
            where: {
                id: Number(noteId)
            }
        })
        res.status(200).json(note)
    }
    else{
        console.log("Note Could not be found")
    }

}
//     else if(req.method === 'PUT') {
//         const {title, content} = req.body
//         const note = await prisma.note.update({
//             where: {
//                 id: Number(noteId)
//             },
//             data: {
//                 title,
//                 content
//             }
//         })
//         res.status(200).json(note)
//     }
//     else if(req.method === 'GET') {
//         const note = await prisma.note.findOne({
//             where: {
//                 id: Number(noteId)
//             }
//         })
//         res.status(200).json(note)
//     }
// }
// // Compare this snippet from pages\api\list.ts:
// // import { NextApiRequest, NextApiResponse } from 'next'
// // import { prisma } from '../../lib/prisma'
// // 
// // export default async function handler (req: NextApiRequest, res: NextApiResponse) {
// //   const notes = await prisma.note.findMany()
// //   res.status(200).json(notes)
// // }
// import { NextApiRequest, NextApiResponse } from 'next'
// import { prisma } from '../../../lib/prisma'

// export default async function handler (req: NextApiRequest, res: NextApiResponse) {
//     const notes = await prisma.note.findMany()
//     res.status(200).json(notes)
// }