import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-cyan-800/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
              MovieMate
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate movie companion. Discover, rate, and create personalized watchlists from thousands of films.
            </p>
            
            <div className="flex space-x-4 mt-6">
              {['Twitter', 'Facebook', 'Instagram', 'YouTube'].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-cyan-600 transition-colors duration-300"
                >
                  <span className="text-white text-xs font-bold">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-4 text-lg">Explore</h3>
              <div className="space-y-3">
                {['Home', 'Discover', 'Trending', 'New Releases'].map((link) => (
                  <Link
                    key={link}
                    href="./"
                    className="block text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-green-400 font-semibold mb-4 text-lg">Library</h3>
              <div className="space-y-3">
                {['Favorite', 'Top Rated', 'Playlist', 'Watch Later'].map((link) => (
                  <Link
                    key={link}
                    href="./"
                    className="block text-gray-400 hover:text-green-300 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-purple-400 font-semibold mb-4 text-lg">Support</h3>
              <div className="space-y-3">
                {['Subscription', 'Help Center', 'Contact', 'About Us'].map((link) => (
                  <Link
                    key={link}
                    href="./"
                    className="block text-gray-400 hover:text-purple-300 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-amber-400 font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest movie recommendations and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-600 to-green-500 hover:from-cyan-700 hover:to-green-600 text-white px-4 py-2 rounded-r-lg transition-all duration-300 text-sm font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-800">
          {[
            { icon: '🎬', title: '10K+ Movies', desc: 'Massive Collection' },
            { icon: '⭐', title: '4.8 Rating', desc: 'User Loved' },
            { icon: '📱', title: 'Any Device', desc: 'Cross Platform' },
            { icon: '🚀', title: 'Instant', desc: 'Fast Streaming' }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
              <p className="text-gray-400 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-cyan-900/20 to-green-900/20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MovieMate. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-2 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                <Link
                  key={item}
                  href="./"
                  className="text-gray-500 hover:text-cyan-300 text-xs transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;