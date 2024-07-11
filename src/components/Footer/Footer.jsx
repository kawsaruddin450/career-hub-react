import React from 'react';

const Footer = () => {
    return (
        <footer className='text-slate-400 bg-slate-950 py-32 mx-auto'>
            <section className='grid grid-cols-5 gap-8 justify-between text-left w-3/4 mx-auto'>
                <div>
                    <h2 className='text-white font-bold text-3xl mb-4'>CareerHub</h2>
                    <p className=''>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-3 text-white'>Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-3 text-white'>Product</h2>
                    <ul>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-3 text-white'>Support</h2>
                    <ul>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-3 text-white'>Contact</h2>
                    <ul>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>
                </div>
            </section>
            <div className='h-0 w-3/4 mx-auto border-t border-t-slate-400 my-12'>
                {/* empty div */}
            </div>
            <div className="grid grid-cols-2 justify-between text-slate-500">
                <p>@2024 CareerHub. All Rights Reserved.</p>
                <p>powered by <strong>CareerHub</strong></p>
            </div>
        </footer>
    );
};

export default Footer;