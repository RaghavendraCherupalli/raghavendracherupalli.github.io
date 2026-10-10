const TalksCard = ({ data }: { data: any }) => {
  if (!data || (!data.talks?.length && !data.teaching?.length)) return null;

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            <span className="text-base-content opacity-70">
              Talks & Teaching
            </span>
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          
          {/* TALKS SUBHEADING */}
          {data.talks && data.talks.length > 0 && (
            <>
              <h6 className="mx-4 mt-4 mb-2 font-bold text-sm opacity-80 uppercase tracking-wider">Talks</h6>
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {data.talks.map((talk: any, index: number) => (
                  <li className="mb-5 ml-4" key={`talk-${index}`}>
                    <div className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5" style={{ left: '-4.5px' }}></div>
                    <div className="my-0.5 text-xs font-semibold text-primary">{talk.date}</div>
                    <h3 className="font-semibold text-base-content">
                      {talk.link ? (
                        <a href={talk.link} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline transition-colors">
                          {talk.title}
                        </a>
                      ) : (
                        talk.title
                      )}
                    </h3>
                    <div className="mb-4 font-normal">{talk.institution}</div>
                  </li>
                ))}
              </ol>
            </>
          )}
          {/* TEACHING SUBHEADING */}
          {data.teaching && data.teaching.length > 0 && (
            <>
              <h6 className="mx-4 mt-4 mb-2 font-bold text-sm opacity-80 uppercase tracking-wider">Teaching</h6>
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {data.teaching.map((course: any, index: number) => (
                  <li className="mb-5 ml-4" key={`teach-${index}`}>
                    <div className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5" style={{ left: '-4.5px' }}></div>
                    <div className="my-0.5 text-xs font-semibold text-primary">{course.term}</div>
                    <h3 className="font-semibold text-base-content">{course.title}</h3>
                    <div className="mb-4 font-normal">{course.institution}</div>
                  </li>
                ))}
              </ol>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default TalksCard;