const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching
router.post('/version-0-7/where-2', function (req, res) { 
    let whereloop = req.session.data['add-more-areas']  
    if (whereloop === 'no') {
      res.redirect('/version-0-7/what')
    } else {
      res.redirect('/version-0-7/where-2-loop')
    }
  })

router.post('/version-0-7/where-2-loop', function (req, res) { 
    let whereloop = req.session.data['add-more-areas']  
    if (whereloop === 'no') {
      res.redirect('/version-0-7/what')
    } else {
      res.redirect('/version-0-7/where-2-loop')
    }
  })

  router.post('/version-0-7/what', function (req, res) { 
    let whatloop = req.session.data['add-more-datatypes']  
    if (whatloop === 'yes') {
      res.redirect('/version-0-7/what-loop')
    } else {
        let when = req.session.data['when-choice']  
        if (when === 'time-period') {
          res.redirect('/version-0-7/churchill-main')
        } else {
          res.redirect('/version-0-7/churchill-main-snapshot')
        }
    }
  })

router.post('/version-0-7/what-loop', function (req, res) { 
    let whatloop = req.session.data['add-more-datatypes']  
    if (whatloop === 'yes') {
      res.redirect('/version-0-7/what-loop')
    } else {
      res.redirect('/version-0-7/churchill-main')
    }
  })