const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching

router.post('/version-0-7/where-1', function (req, res) { 
  let areatypeloop = req.session.data['how-to-lep']  
  if (areatypeloop === 'lep-as-authorities') {
    res.redirect('/version-0-7/where-2-lep')
  } else {
    res.redirect('/version-0-7/where-2')
  }
})

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

  router.post('/version-0-7/what-lep', function (req, res) { 
    let whatloop = req.session.data['add-more-datatypes']  
    if (whatloop === 'yes') {
      res.redirect('/version-0-7/what-lep-loop')
    } else {
      res.redirect('/version-0-7/churchill-main-lep-x')
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


  // Branching TEST VERSION
router.post('/test-version/where-2', function (req, res) { 
  let whereloop = req.session.data['add-more-areas']  
  if (whereloop === 'no') {
    res.redirect('/test-version/what')
  } else {
    res.redirect('/test-version/where-2-loop')
  }
})

router.post('/test-version/where-2-loop', function (req, res) { 
  let whereloop = req.session.data['add-more-areas']  
  if (whereloop === 'no') {
    res.redirect('/test-version/what')
  } else {
    res.redirect('/test-version/where-2-loop')
  }
})

router.post('/test-version/what', function (req, res) { 
  let whatloop = req.session.data['add-more-datatypes']  
  if (whatloop === 'yes') {
    res.redirect('/test-version/what-loop')
  } else {
      let when = req.session.data['when-choice']  
      if (when === 'time-period') {
        res.redirect('/test-version/churchill-main')
      } else {
        res.redirect('/test-version/churchill-main-snapshot')
      }
  }
})

router.post('/test-version/what-loop', function (req, res) { 
  let whatloop = req.session.data['add-more-datatypes']  
  if (whatloop === 'yes') {
    res.redirect('/test-version/what-loop')
  } else {
    res.redirect('/test-version/churchill-main')
  }
})