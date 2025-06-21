import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex flex-col items-center">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-3 mx-auto',
                      })}
                    </h2>
                    <div className="w-full max-w-[200px] mx-auto">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-32',
                        shape: 'rounded-lg',
                      })}
                    </div>
                    <div className="mt-4">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer transition-all duration-300 hover:shadow-xl"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticId) {
              ga.event('Click External Project', {
                post: item.title,
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, '_blank');
        }}
      >
        <div className="p-8 h-full w-full">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-medium text-center opacity-60 mb-1">
                    {item.title}
                  </h2>
                  {item.underDevelopment && (
                    <div className="flex justify-center mb-3">
                      <div className="inline-flex items-center text-xs font-medium bg-base-200 text-primary px-3 py-1 rounded-md shadow-sm border border-base-300 status-badge">
                        <span className="mr-1">In Progress</span>
                        <span className="loading-spinner"></span>
                      </div>
                    </div>
                  )}
                  {!item.underDevelopment && <div className="mb-3"></div>}
                  {item.imageUrl && (
                    <div className="relative mb-4">
                      <div className="w-full max-w-[200px] mx-auto border border-base-300 shadow-md rounded-lg overflow-hidden inner-shadow project-image-container">
                        <LazyImage
                          src={item.imageUrl}
                          alt={'project thumbnail'}
                          className="w-full h-auto object-contain rounded-lg"
                          placeholder={skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-32',
                            shape: '',
                          })}
                        />
                        <div className="project-image-overlay">
                          <div className="view-project-btn">
                            {item.underDevelopment && 'Coming Soon'}
                            {!item.underDevelopment && 'View Project'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderExternalProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
