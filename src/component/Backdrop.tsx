import ReactDOM from 'react-dom'

const Backdrop = ({ onClick }: { onClick: () => void }) => {
  if (typeof window === 'undefined') return null

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
      onClick={onClick}
    />,
    document.getElementById('portal-root')!
  )
}

export default Backdrop
