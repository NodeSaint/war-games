import { Routes, Route } from 'react-router-dom'
import { AppShell } from '@/components/AppShell'
import { Catalog } from '@/routes/Catalog'
import { Briefing } from '@/routes/Briefing'
import { Play } from '@/routes/Play'
import { Debrief } from '@/routes/Debrief'
import { About } from '@/routes/About'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/briefing/:id" element={<Briefing />} />
        <Route path="/play/:id" element={<Play />} />
        <Route path="/debrief" element={<Debrief />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Catalog />} />
      </Routes>
    </AppShell>
  )
}
