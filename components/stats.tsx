const stats = [
    { id: 1, name: 'Startups Funded', value: '07+' },
    { id: 2, name: 'Raised', value: '$1.2M' },
    { id: 3, name: 'Investors', value: '09' },
    { id: 4, name: 'VCs', value: '05' },
]

export default function Stats() {
    return (
        <>


            <div className="bg-black py-24 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-4xl  font-bold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 sm:text-5xl">Fund Raising and Startups</h2>
                    <p className="text-xl mb-10 text-center text-gray-200">
                    To facilitate the growth of African blockchain startups. We collaborate with venture capitalists, investors, and institutions keen on investing in the African blockchain market. Our goal is to provide a platform for fundraising activities that support the development and expansion of innovative blockchain projects across the continent.
                    
                    </p>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </>
    )
}

{/* <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} />
            </div> */}