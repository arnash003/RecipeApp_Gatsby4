import React from 'react'
import Layout from '../components/Layout';

const Contact = () => {
    return (
        <div>
            <Layout>
                <main className='page'>
                    <section className='contact-page'>
                        <article className='contact-info'>
                            <h3>Want to get in touch?</h3>
                            <p>Keytar kitsch knausgaard food truck keffiyeh.
                                Trust fund neutra polaroid DIY, stumptown XOXO same plaid slow-carb microdosing sriracha cardigan swag truffaut.
                            </p>
                            <p>
                                Brunch actually next level, kombucha everyday carry typewriter fam tilde hexagon.
                            </p>
                            <p>
                                Master cleanse wolf hoodie mustache neutra iPhone 8-bit art party succulents fanny pack iceland green juice plaid forage.
                            </p>
                        </article>
                        <article>
                            <form className='form contact-form'>
                                <div className='form-row'>
                                    <label htmlFor='name'>your name</label>
                                    <input type="text" name="name" id="email" />
                                </div>
                                <div className='form-row'>
                                    <label htmlFor='email'>your email</label>
                                    <input type="text" name="email" id="email" />
                                </div>
                                <div className='form-row'>
                                    <label htmlFor='text'>message</label>
                                    <textarea name="message" id="message"></textarea>
                                </div>
                                <button type="submit" className='btn block'>Submit</button>
                            </form>
                        </article>
                    </section>
                </main>
            </Layout>
        </div>
    )
}

export default Contact