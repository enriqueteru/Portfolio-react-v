import { Route, 
         Routes } from 'react-router'

import { About, 
         Blog, 
         Contact, 
         Home, 
         Proyects, 
         Services } from '../pages'

import { Footer, 
         Nav, 
         NotFound404} from '../core'

const PublicRoutes = () => {
  return (<>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/proyects" element={<Proyects />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/*" element={<NotFound404 />} />
    </Routes>
    <Footer />
    </>
  )
}

export default PublicRoutes