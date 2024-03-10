export const allProjectsQuery = () => {
  const query = `*[_type == "project"] {
      _id,
      name,
      description,
      liveUrl,
      projectThumbnail,
      projectCaptures,
      versionedProjectLink->{
        _id,
        title,
        platform->{
          _id,
          title,
          platformLogo
        },
        url
      }
    }`;

  return query;
};

export const projectDetailQuery = (projectId) => {
    const query = `*[_type == "project" && _id == '${projectId}']{
      _id,
      name,
      description,
      liveUrl,
      projectThumbnail,
      projectCaptures,
      versionedProjectLink->{
        _id,
        title,
        platform->{
          _id,
          title,
          platformLogo
        },
        url
      }
    }`;

    return query;
};
