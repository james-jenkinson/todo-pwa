interface ExtendableEvent extends Event {
  waitUntil: (callback: Promise) => void
}

interface WindowEventMap {
  'install': InstallEvent
}
