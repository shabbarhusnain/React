import React from 'react'
import {data, useLoaderData,Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
function Github() {

const {data,repos}=useLoaderData()
  return (
    <div className="min-h-screen bg-white text-black p-6 font-sans antialiased selection:bg-orange-500 selection:text-white">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 py-8 border-b-2 border-black/5">
    <img 
      src={data.avatar_url} 
      alt={data.name}
      className="w-32 h-32 rounded-full border-4 border-black object-cover shadow-[4px_4px_0px_0px_rgba(249,115,22,1)]" 
    />
    
    <div className="flex-1 text-center md:text-left space-y-3">
      <h1 className="text-4xl font-black uppercase tracking-tight text-black">
        {data.name}
      </h1>
      
      <div className="flex justify-center md:justify-start items-center gap-4 text-sm font-bold tracking-wide">
        <span className="bg-black text-white px-3 py-1 rounded">
          Followers <span className="text-orange-500 ml-1">{data.followers}</span>
        </span>
        <span className="border-2 border-black text-black px-3 py-1 rounded">
          Following <span className="text-orange-500 ml-1">{data.following}</span>
        </span>
      </div>

      {data.bio && (
        <p className="text-gray-600 max-w-xl text-base leading-relaxed pt-1">
          <span className="font-bold text-black block text-xs uppercase tracking-wider mb-1">Bio</span>
          {data.bio}
        </p>
      )}
    </div>
  </div>

  <div className="max-w-4xl mx-auto py-10">
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 border-b-4 border-black pb-2">
      <h2 className="text-3xl font-black uppercase tracking-tight text-black">
        Repositories
      </h2>
      <span className="text-sm font-bold uppercase tracking-wider text-white bg-orange-500 px-3 py-1 self-start sm:self-auto">
        Public: {data.public_repos}
      </span>
    </div>

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <li key={repo.id} className="group relative">
          <div className="absolute inset-0 bg-orange-500 rounded transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
          
          <div className="relative border-2 border-black bg-white p-5 rounded transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 flex flex-col h-full justify-between">
            <Link to={repo.svn_url} target="_blank" rel="noreferrer" className="block space-y-3 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-lg text-black group-hover:text-orange-500 transition-colors line-clamp-1 break-all">
                  {repo.name}
                </h3>
                <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded shrink-0">
                  {repo.visibility}
                </span>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2 min-h-[2.5rem]">
                {repo.description || "No description provided."}
              </p>

              <div className="flex items-center gap-3 pt-2 text-xs font-bold uppercase tracking-wider text-black">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                    {repo.language}
                  </span>
                )}
                <span className="text-gray-400">
                  Branch: <span className="text-black">{repo.default_branch}</span>
                </span>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

  )
}

export default Github

export const githubInfo=async ()=>{
      const [profile,repos]= await Promise.all([
        fetch(`https://api.github.com/users/shabbarhusnain`),
        fetch(`https://api.github.com/users/shabbarhusnain/repos`)
      ])
      const [profileData,reposData]=await Promise.all([profile.json(),repos.json()])
      return {data:profileData,
        repos:reposData}
}
