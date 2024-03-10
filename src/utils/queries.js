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

export const projectDetailsQuery = (projectId) => {
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

export const profileDataQuery = () => {
  const query = `*[_type == "profile"][0] {
      _id,
      firstName,
      lastName,
      profileImage,
      emailAddress,
      versionControlProfileUrl->{
        _id,
        title,
        platform->{
          _id,
          title,
          platformLogo
        },
        url
      },
      socialLinks[]->{
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

export const siteSettingsQuery = () => {
  const query = `*[_type == "siteSettings"][0] {
      _id,
      siteTitle,
      description,
      copyrightYear,
      copyrightText,
    }`;

  return query;
};