import Image from 'next/image';
import { contact } from '../data/config';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contact.title}
        </h2>
      </div>
      <p>
        Shoot me an email:{' '}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </p>
      <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
        
        {contact.linkedin && (
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/linkedin.svg"
              width={40}
              height={40}
              alt="LinkedIn icon"
            />
            
          </a>
          
          
        )}
        {contact.resume && (
          <a
            href={`${contact.resume}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/resume-cv.svg"
              width={40}
              height={40}
              alt="Resume icon"
            />
            
          </a>
        )}
      </div>
    </div>
  );
}
