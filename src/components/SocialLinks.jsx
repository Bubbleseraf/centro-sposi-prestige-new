import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa6'
import './SocialLinks.css'

const socials = [
  { label: 'Instagram', Icon: FaInstagram },
  { label: 'Facebook', Icon: FaFacebookF },
  { label: 'Pinterest', Icon: FaPinterestP },
]

function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`.trim()} aria-label="Canali social">
      {socials.map(({ label, Icon }) => (
        <span
          className="social-icon"
          aria-label={`${label} - collegamento in arrivo`}
          title={`${label} - collegamento in arrivo`}
          role="img"
          key={label}
        >
          <Icon aria-hidden="true" />
        </span>
      ))}
    </div>
  )
}

export default SocialLinks
