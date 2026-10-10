import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: any[]; 
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index} className="m-1">
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }
    return array;
  };

  // 1. Map your custom types to DaisyUI color classes
  const colorMap: Record<string, string> = {
    coding: 'badge-primary',      // Usually blue or main theme color
    cyber: 'badge-secondary',     // Usually pink/purple/orange
    cloud: 'badge-accent',        // Usually teal/green
    hardware: 'badge-info',       // Usually light blue
    default: 'badge-ghost',       // Fallback gray/neutral
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Skills</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center">
            {loading
              ? renderSkeleton()
              : skills.map((skill, index) => {
                  
                  // 2. Safely extract the name and type (in case you forgot to update one in the config)
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  const skillType = typeof skill === 'string' ? 'default' : skill.type;

                  // 3. Look up the color based on the type, or use the default if it doesn't exist
                  const colorClass = colorMap[skillType] || colorMap['default'];

                  return (
                    <div
                      key={index}
                      className={`m-1 badge ${colorClass} text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-2 bg-opacity-90 rounded-full border-none`}
                    >
                      {skillName}
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;