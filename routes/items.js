const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  const pluCd = req.query.plu_cd
  const items = [
    {
      plu_cd: '123',
      name: 'たまご',
      price: 555
    },
    {
      plu_cd: '234',
      name: 'リンゴ',
      price: 140,
      brgn: 30
    },
    {
      plu_cd: '345',
      name: 'あいうえお',
      price: 160
    }
  ]
  let result
  if (pluCd) {
    result = items.find((item) => {
      if (item.plu_cd === pluCd) return true
    })
  } else {
    result = items
  }
  res.json(result)
})

module.exports = router
