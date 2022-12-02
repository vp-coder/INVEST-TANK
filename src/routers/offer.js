import { request, Router } from "express";
import Offer from "../models/offer.js";
import Pitch from '../models/pitch.js'
const router = new Router();
//POST..make a counter offer for a pitch
router.post('/pitches/:id/makeOffer', async (req, res) => {
  try {
    const _id = req.params.id
    const offers={...req.body,pitch_id:_id}
    const offer=new Offer (offers)
    await offer.save()
    const pitch = await Pitch.findById(_id)
    if(pitch["offers"]===undefined)pitch.offers=[offer]
    else pitch.offers=[...pitch.offers,offer]
    // console.log(pitch);
    await Pitch.findByIdAndUpdate(_id, { offers:pitch.offers })
    res.status(201).send({
      success: true,
      data:offer,
      error: null,
    })
  } catch(error) {
      res.status(404).send()
  }})
  export default router;
  
