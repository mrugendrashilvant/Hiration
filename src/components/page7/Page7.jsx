import React from 'react'
import Card from './Card'

export default function Page7() {
    return (
        <div className='container mx-auto w-11/12'>
            <div className='container mx-auto w-2/3 mt-16 text-center'>
                <h1 className="text-4xl font-bold text-gray-700">Thats not all, <span className='text-orange-500'>You Get More</span></h1>
                <p className="font-normal mt-4 text-lg">Enjoy more features from our suite, covering all your career needs.</p>
            </div>
            <div className="flex justify-center mt-12">
                <Card color="bg-orange-200" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>} title="LinkedIn Review" text="Optimize your LinkedIn profile and get more job shortlists with our Linkedin Reviewer" />
                <Card color="bg-white" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>} title="Web Portfolio" text="Showcase your work, Launch your own personal website in a single click!" />
                <Card color="bg-orange-200" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>} title="Cover Letter" text="Stand out with our professional templates. Get a job-winning cover letter to go with your resume!" />
                <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>} title="Interview Prep" text="Relevant Interview questions, answers on the basis of your Resume and Job Role, to crack the Interview of your dreams. 500+ Job Roles" />
            </div>
            <div className="mt-10 flex flex-col items-center">
                <p className="text-orange-500 mx-auto">GET INTERVIEW FROM</p>
                <div className="mt-8 flex justify-evenly items-center">
                    <img className='w-1/6 h-fit' src="https://www.citypng.com/public/uploads/preview/-11596996320jvpcukq2hk.png" alt="google" />
                    <img className='w-1/6 h-fit' src="https://seekvectorlogo.net/wp-content/uploads/2018/07/goldman-sachs-vector-logo.png" alt='goldman' />
                    <img className='w-1/6 h-fit' src="https://www.pngkit.com/png/full/332-3321908_adobe-logo-01-adobe-logo-black-and-white.png" alt='adobe' />
                    <img className='w-1/6 h-fit' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdQAAABsCAMAAADkF7PyAAAAZlBMVEX///9zc3N9fX2FhYWXl5e9vb1ra2tpaWlubm78/Py6urrt7e3Q0NBqamrLy8vy8vKqqqp3d3fd3d2Pj4/ExMTV1dWwsLD39/elpaXk5OScnJyKioqoqKjo6Ojc3Nzw8PBfX19YWFiIchLcAAALvklEQVR4nO2dfYOyKhPG0wzQMrN8ydpqz/f/kscUhgFB2b13tzKu5/njrCEKP16GYfBeLLy8vLy8vLy8vLy8vLy8vLweoNpZ99RxHbupjh9dsHcWCRxF123q5Hxw03n76IK9s/LQUcEd6ipylYf6QHmoM5SHOkN5qDOUhzpDeagzlIc6Q3moM5SHOkN5qDOUhzpDeagzlIf6WNXr/b7cr+sfzdRDfaDq4pBTSlNKg+VP5uuhPk4JI0zsbH7+5Ab0i0LdJ1XS/O4jflvrEO9l09eGGhdbqWLi9TKUdpuJq/WBEkZo9LMz0d9qz1gwH6jZJ5GiyfjrnalM+ynyjMO+PtiPTkR/q0wLOXl1qBQXJh99uzUuOtnwqztxla5+riL+WEuln84MKr2OvV2Fiw5Q5aWX7aqrFMrAWuOXsFlBZdHY2ynNWUCNZQb5iwYtxrmsgI9yv98cEdRs9a8m4KOhBiyzplxsU5wSeqq8Oj54P682UAf5ur8ibL5LcqafG+uNbno4VDIyLy7VlKKsB9GB2ekfS/8onUQJ6BpfLquctkYxeXmoQWhN2Wj4N/p1srbe+9wSoy874qtnytSCfjv7h0NNrTPIUbUQZVm3nSeGsPIfC/8o1aJgqVICMQLNAKraWnHR1XS4rJePkIXVyGz83LoBVGWomRHUILUkLLT1+T+X9Wm0BqNAaZdzgkosvsLQ3lNfXAA1mC1UdjCm2/OVyzL3UL+ox0FllSgZNRqx3ExiSeihflEPhJoIJyCrDMnqT048+3JPrS9NeS2bifVObPJG1etL0zSXCRMsu+zLcj+aKuvyWZs9XmAoBco+0xygVjfhGjJ5+1a9mcSixRDqdtPLsKSpN8cwIDRt/8eC0+oirl/4PdsOdbw5hXmQL5XZ/Facws4TSwnLI3mrpv0uDNrs2/+z0JgqvlbnnJF7SAMLlrsSF65/jQKgFhupUvhaSJFxfXNv8ZFQoWlSA50QfhpAXfPNOzpoDJcTS9Hitq3ZM7+p4nt4dNf+Ueb9Mh/P5uWBEPOtijZLqqbSnVpZ7xWSSWi+k1161b86/Eqw5FXa63Nqu9mih0IVLlCDqXTlP+XS+S2hClMrVKHWJ6ptaLVZf/a/JWior8T9cjehWRpupUvdL5Idpqy8aphPmxHsGq+cT+53JX5FqMArHUxPEfeYJe5QSzasz7ar9z8iqMBUQq10VuJmdQ9/PXyCCvWSm6GRJS/gG0CF/VKiB0DceOHZzRlqYQYzgHqV6TjU+GCt6m60hpcyNBoF6sbUqvpkQT/5vgPUm6hgfQ8tATPJFaqF6RAq2vrhUM9WFu3tyDLXoxW6LBDUjeUVemXvAlWMsgHdq4lElZauUNUKZXe7o89agxpgP1UP9Ui0O5VBlkLFymiFzkSmnUmGoF7wKzBGFMOLB1S9BdRS/KEakRtef/cO7AQ1w/ZmutzdIxZ33VaWDhWwpC28O1TUxVvT6LgqiioKUN2Tm6gqcYWeru1aI7tWrXWFoOboniCqimJ1xOYXuY/kyWdn1sJFiiWTvrL1u5DxRsy0DGeJK9RIVh49wtpxvWPMBJWESXktiyhtiWTociSs3bgIIL2wpvawiyvL1pwoQK2gIbCgEKVpIrRQad+r7pafDWR+yaTqs0hY1PzSN6N1RqYTVf3HsRy/jTX2cSwVKphKuFGKqZbeO4kL1FIatLkykGen//r/wFAhCHHdPvQDfqD4FWo5gdIetRg5VXu3ERuHMvCRLXEDLYa2NnIT/o5Hyfkrdt08Hzsnt7cxFSrEv+LAQE66rz4XqGD8sFB3wvBoRQRVcXXUMFFSrR3C5Munhp0wtcyhytA49GhkSRV2T3/b9/v3UqHKksiFvsBIN/ivEah7OR3Z/LESqhoUBZYL+9DuuEm7qGsoIg6D7RYGyR19or8CBCTBwm32UMFUknUlggh7L6ADVIh7odbqkFDVjiQXOAM/q+iaPOgE/jQGVQnTbrjkRstb8ejZQ4VhjkEKvm7kmKehyihae3A3QFWXCbC5a+h/F6L8BjkYuyq0KzZ0woMVJ4J7fxvqx85Rx/vLNhtX2fY4hlDFAJiKOe3CGz3fZp2GCtGFqb02AAlV6hE6GDWEv0Ev7tqKNMbIeZhY/GYKTpcP4RP8b0MNl47K75ZombjKfppCh1rrXn2xO37u/5yGKlf09q2qxDx4wrkO0+4fDLjdsgjFwTESac6SGtY7hqVlpv/4NFDDHurKTcne+kQdKhgStF/lx6LnilMWk1Bh6DvbywluQrUniWcbQ2og8o12jQUYB52bosDNAAYL3TWmlEAU+Q2gCg87XyuIqiR6lVihCt+tNdh0gaCqaUZvLWHY7CYTLWSVsCo2JDWZ32IcF095A6hgKoW4BuDnaajQEUYOu+L9VCSoblNEjex+/RyK9nc4Vhhrt2BUmWYAQUs4Q98BqpgTOztC1CQVptY0VDBsR47lmKHGYHqb2oMOdXHV91PTA2coY5RNXpdIG/vfAWqGyywmSFidTEMFO+S3oS5uZ/14AfdgOUJ9o54qzZUMjpnAAscBqpjPvjH8AlTT8AuOKhTDus21k5h94yvcht83mlOh9tquBssTaPHTUKGCdU8f0tScajKUNqr1y7VVw5nSriVt3Ayl97F+UalDYfQgPtNQoc5cljQqVBgYTUsaaGBUvd6clO3vO/H96JJG92a9B1RRfUTUPZUeqWmo4DF3cD5oUOXGm2EuhHwH3sf1SQ7C3Xoa4nJMzoeLTvw9oMJnHETVoz73BY+Sg5tQgyr9C4YX1n0GWHu5id6N3DCvG7q87PF/5Pt9DqiD88WovTv4fmGTbNqhrwGCTmSYVK8i29R0uPkCHvyuAYLTng1PewymhzeBqn8JAA2GDltvMnrIGnBhgSo/3zOEcRgbmlE77HwmhXVfVjYOWHJNQf1maBLoSaCq3+xQuo0DVPm5JWLbHbJBhVsH4+ZG68T6fL1VYjbkF8wG+z0QQgEh6xNQzdvwX9CzQFW+rqNMcA5Q0YfRmFal5TBCXxHkFRA1oLGRlPqGElVqhxV9k7uJpLXG1IYlB2Z4gAXqSen7/6Bngap4y5VCucQooSlZ8UA0UToBFcEgEapiGWwvWBxprmzMHNQcL6hVojkxk+GE8lsyFqgwasA4/c1owmeBirmo7j4XqDWys0jOPxq7Lu6Bv1NQ0VkKxj761643yB0ovsvQviAJjqJcMSyGxLCCCpCe+RdPm0p6i4l8sgXqVvKvupCE0zcn16eBiuLbVVebU9xviQ0tRmkehox2LoIpqMp5je7OZUCRcwFsrw4ao+ywq6qPg/QqiWEFfZrufsSRhcuQIt8TDjK0QMWzCM3b16CvDlWeaNGi9d2OXSS2cyyTUBfH1HJrdzukh2jCTjIBrHcuY/koLdUCVfvC2/fN4OeBurX4ARwPSFlPI/Y/j0BdnOwHXNCpN20pLV4KGepXez4swCsmG9StvmH78lDhX9LWbD/Xo4yWvuoAtbWBbEyR1WWEmioLob3xhOz91cMbTmeDqp+rmwFUHgOk74o6Hzq+Bqae8tn/OAq1tXVNNEiOw+dMUKmWWz04ad49k2oOCSvUTH2P14NK9OrlcxLVVvkx1KAOlWmfB4grpmFlNOT1khDLU3vVH4Nb0zxRsq8oYVrmy2HMZDn4zgCjB90dARbR4Lu461BZr78OVJZ3CgbVe+6u61/GiMOc3wBQeQ75Ul/H1cWS3Y8odiJpEMGnUZLA9lRx62p5t5fh1sNWz3y9OgQyBW0zN2Z0PeVE5sPCaujkWvOXyfPB7mu8ysUzUra01+Ko/h7qLysrV7tTFEXHZNt8ce2eXVfVKTpFx6pozJt4cbNNjtEhOrUpRjK/3FO1Oe2S8hsfr21Wu/tLJOVtOq1Zs4Pq5aHOUh7qDOWhzlAe6gzloc5QHuoM5aHOUB7qDOWhzlAe6gzloc5QHuoM5aHOUB7qDOX6Zdiw+9dbf+I7Sl6/rsJVq/u28WXvqlf9l029vLy8vLy8vLy8vLy8vLy8vIT+B4VILMX5hE7jAAAAAElFTkSuQmCC" />
                </div>
            </div>
        </div>
    )
}
